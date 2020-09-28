import { initializeApp } from "firebase/app";
import 'firebase/database';

const firebaseConfigs = {
    apiKey: "AIzaSyCM4LaAdvGSVav4WCVmtBf2ynJok6uMPGI",
    authDomain: "spotify-plugin-app.firebaseapp.com",
    databaseURL: "https://spotify-plugin-app.firebaseio.com",
    projectId: "spotify-plugin-app",
    storageBucket: "spotify-plugin-app.appspot.com",
    messagingSenderId: "1000088386798",
    appId: "1:1000088386798:web:de8232c75a287f4c9187ff",
    measurementId: "G-6DY82HL6BR",
};

const firebaseAdmin = initializeApp(firebaseConfigs);
const db = firebaseAdmin.database()

export class FirebaseUtil {
    static addNew(key: string, data: any): void {
        try {
            var ref = db.ref(key).push()

            ref.set(data)
        } catch (ex) {
            console.error("there was some firebase error", ex);
        }
    }
}

