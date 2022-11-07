export default {
    saveAuth(token: string) {
        localStorage.setItem('auth', token);
    },
    clearAuth() {
        localStorage.removeItem('auth');
    },
    getAuth() {
        return localStorage.getItem('auth') ?? undefined;
    },
};
