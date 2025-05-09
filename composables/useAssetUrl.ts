export const useAssetUrl = (path: string): string => {
    const config = useRuntimeConfig();
    return config.app.baseURL + path.replace(/^\/+/, ''); // Убираем лишние /
};
