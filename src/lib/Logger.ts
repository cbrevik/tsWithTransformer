// import { Configuration, Client } from 'bugsnag-react-native';

// const configuration = new Configuration('API-KEY')
// configuration.beforeSendCallbacks.push(() => !__DEV__);
// const loggingClient = new Client(configuration);

class Logger {
    log(message: string, metadata: {} = {}) {
        //loggingClient.log(message, metadata);
        console.log('message', metadata);
    }
}

export default new Logger();