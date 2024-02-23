export const Popularity = ( { comments } ) => {
    let result;

    if (comments.length === 0) result = <p>Будь первым. Поделись впечатлениями</p>;

    comments.length >= 5 ? result = <p>Проверенный товар</p> : '';

    return result;
}