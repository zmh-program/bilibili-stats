import { expiration } from "./config";
import  { getLogger } from "log4js";

const logger = getLogger("cache");
logger.level = "info";


class Cache {
  protected caches: object;
  public expiration: number;
  constructor(expiration: number) {
    this.caches = {};
    this.expiration = expiration;
    this.uptime();
  }

  get(key: string): undefined | any {  /** @ts-ignore **/
    const value = this.caches[key];
    if (this.exist(key)) {  //@ts-ignore
      return JSON.parse(value.value);
    }
  }

  set(key: string, value: any): void {  //@ts-ignore
    this.caches[key] = {
      value: JSON.stringify(value),
      expiration: (new Date().getTime() / 1000) + this.expiration,
    }
  }

  exist(key: string): boolean {  //@ts-ignore
    const value = this.caches[key];
    return (!!value) && (value.expiration > (new Date().getTime() / 1000));
  }

  remove(key: string): boolean {  //@ts-ignore
    return delete this.caches[key];
  }

  uptime(): void {
    const _this = this;
    setInterval(function (){
      let n: number = 0;
      for (const key in _this.caches) {  //@ts-ignore
        if (_this.caches[key].expiration < (new Date().getTime() / 1000)) {
          _this.remove(key); n++;
        }
        if (n > 0) logger.info(`Clean ${n} Caches`);
      }
    }, this.expiration / 2);
  }

  memo(name: string, func: (...params: any[]) => Promise<any>): (...params: any[]) => Promise<any> {
    /**
     * Async Function Cache.
     */
    const _this: Cache = this;
    return async function (...params : any[]) {
      const key: string = `${name}_${params}`;
      if (_this.exist(key)) {
        logger.debug(`Hit Cache of ${name}`);
        return _this.get(key);
      } else {  /** @ts-ignore **/
        const response: any = await func(...params);
        _this.set(key, response);
        return response;
      }
    }
  }
}

const cache = new Cache(expiration);
export const memo = cache.memo;
