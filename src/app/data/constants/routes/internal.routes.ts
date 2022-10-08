// Rutas por la cual navegamos internamente en nuestra plataforma

export const ROUTES_PATHS = {
    AUTH: {
        DEFAULT: 'auth',
        LOGIN: 'login',
    },
    PANEL: {
        DEFAULT: 'panel',
        USER: 'users',
        VIDEOS: 'videos',
    },
    API: {
        E_404: 'error-404'
    }
};

export const INTERNAL_PATHS = {
    /**
     * AUTHENTICATION
     */
    AUTH_DEFAULT: `${ROUTES_PATHS.AUTH.DEFAULT}`,
    AUTH_LOGIN: `${ROUTES_PATHS.AUTH.LOGIN}`,
    /**
     * PANEL
     */
    PANEL_DEFAULT: `${ROUTES_PATHS.PANEL.DEFAULT}`,
    PANEL_USER_LIST: `${ROUTES_PATHS.PANEL.USER}`,
    PANEL_VIDEOS_LIST: `${ROUTES_PATHS.PANEL.VIDEOS}`,

    /**
     * API
     */
    API_ERROR_404: `${ROUTES_PATHS.API.E_404}`,
};

export const INTERNAL_ROUTES = {
    /**
     * AUTHENTICATION
     */
    AUTH_LOGIN: `${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}`,
    /**
     * PANEL
     */
    PANEL_USER_LIST: `${INTERNAL_PATHS.PANEL_DEFAULT}/${INTERNAL_PATHS.PANEL_USER_LIST}`,
    PANEL_VIDEOS_LIST: `${INTERNAL_PATHS.PANEL_DEFAULT}/${INTERNAL_PATHS.PANEL_VIDEOS_LIST}`,
    /**
     * API
     */
    API_ERROR_404: `/${INTERNAL_PATHS.API_ERROR_404}`,
};