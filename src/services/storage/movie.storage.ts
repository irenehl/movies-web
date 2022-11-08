import _ from 'lodash';

export default {
    getFavorite(): number[] {
        return JSON.parse(localStorage.getItem('fav') ?? '[]');
    },
    setFavorite(movies: any) {
        localStorage.setItem('fav', JSON.stringify(movies));
    },
    isFavorite(id: number) {
        const movies: number[] = this.getFavorite();

        if (movies.length === 0) return false;

        const isFav = _.indexOf(movies, id) !== -1;

        return isFav;
    },
    toggleFavorite(id: number) {
        const isFav = this.isFavorite(id);
        let favs: number[] = this.getFavorite();

        favs = isFav ? this.removeFavorite(id, favs) : this.addFavorite(id, favs);
        this.setFavorite(favs);

        return !isFav;
    },
    removeFavorite(id: number, favs: number[]) {
        return favs.filter((mov) => mov !== id);
    },
    addFavorite(id: number, favs: number[]) {
        return _.concat(favs, [id]);
    },
};
