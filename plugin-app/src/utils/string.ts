export class StringUtil {
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
