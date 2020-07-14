import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/*

IOS com Emulador: localhost

IOS com dispositivo fisico: IP da maquina

Android com Emulador: localhost (no prompt de comando: adb reverse tcp:3333 tcp:3333)
Android com Emulador: 10.0.2.2 (Emulador do Android Studio)
Android com Emulador: 10.0.3.2 (Genymotion)
Android com dispositivo fisico: IP da maquina

*/
