// import { environment as ENV } from 'environments/environment'
import { environment as ENV } from 'environments/environment.prod'

export const API_ROUTES = {
    AUTH: {
        LOGIN: `${ENV.uri}auth/login`
    },
}