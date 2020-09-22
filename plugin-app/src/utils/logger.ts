import { FirebaseUtil } from "./firebase";

export class LoggerUtil {
    static log(...args: any[]): void {
        LoggerUtil._do("log", args);
    }

    static warn(...args: any[]): void {
        LoggerUtil._do("warn", args);
    }

    static error(...args: any[]): void {
        LoggerUtil._do("error", args);
    }

    static _do(type: 'log' | 'warn' | 'error', args: any[]) {
        console[type](`[${type}]: `, args);

        FirebaseUtil.addNew(`log/${type}`, args);
    }
}
