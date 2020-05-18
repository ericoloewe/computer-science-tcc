export class StringUtil {
  static isEmpty<T>(any: T): boolean {
    return any == null || (typeof any === "string" && any.trim().length === 0);
  }

  static isString<T>(any: T): boolean {
    return typeof any === "string";
  }

  static sliceIfNeed(str: string, size: number = 50): string {
    return str.length > size ? `${str.slice(0, size)}...` : str;
  }

  static toString(str: any): string {
    if (!str) {
      throw new Error("Invalid str");
    }

    return str.toString();
  }

  static toStringOrDefault(str: any, def: string): string {
    return !str ? def : str.toString();
  }
}
