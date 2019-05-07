let albums = [
<<<<<<< HEAD
    {albumTitle: 'L\'appel du Vide', seriesTitle: 'Chronicles of Sado: Chapter One', tracks: 'Five'},
    {albumTitle: 'Suppressed Aggression', seriesTitle: 'Chronicles of Sado: Chapter Two', tracks: 'Five'},
    {albumTitle: 'untitled', seriesTitle: 'Chronicles of Sado: Chapter Three', tracks: 'Five'},
    {albumTitle: 'The Era of Artificial Intelligence and Organic Idiocracy', seriesTitle: 'The Socio-Political Series', tracks: 'Thirteen'},
    {albumTitle: 'Overmedicated', seriesTitle: 'Chronicles of Sado: Chapter Four', tracks: 'Five'},
    {albumTitle: 'Chronicles of Sado (remastered)', seriesTitle: 'Chronicles of Sado: Chapter 1-4', tracks: 'Twenty'},
    {albumTitle: 'Odis Mills Presents: Socialist Slim', seriesTitle: 'The Socio-Political Series', tracks: 'Eighteen'}
=======
    {'albumTitle': 'L\'appel du Vide', 'seriesTitle': 'Chronicles of Sado: Chapter One', 'tracks': 'Five'},
    {'albumTitle': 'Suppressed Aggression', 'seriesTitle': 'Chronicles of Sado: Chapter Two', 'tracks': 'Five'},
    {'albumTitle': 'untitled', 'seriesTitle': 'Chronicles of Sado: Chapter Three', 'tracks': 'Five'},
    {'albumTitle': 'The Era of Artificial Intelligence and Organic Idiocracy', 'seriesTitle': 'The Socio-Political Series', 'tracks': 'Thirteen'},
    {'albumTitle': 'Overmedicated', 'seriesTitle': 'Chronicles of Sado: Chapter Four', 'tracks': 'Five'},
    {'albumTitle': 'Chronicles of Sado (remastered)', 'seriesTitle': 'Chronicles of Sado: Chapter 1-4', 'tracks': 'Twenty'},
    {'albumTitle': 'Odis Mills Presents: Socialist Slim', 'seriesTitle': 'The Socio-Political Series', 'tracks': 'Eighteen'}
>>>>>>> f8fecb742d436b81f95e3768bbcbd4a96559bf30
];

exports.getAll = () => {
    return albums;
}
  
exports.get = (albumTitle) => {
    return albums.find((album) => {
        return album.albumTitle == albumTitle;
    });
}

<<<<<<< HEAD
exports.delete = (albumTitle) => {
=======
exports.delete = function (albumTitle) {
>>>>>>> f8fecb742d436b81f95e3768bbcbd4a96559bf30
    let foundIndex = albums.findIndex((album) => {
        return album.albumTitle === albumTitle;
    });
    albums.splice(foundIndex, 1);
    return foundIndex;
<<<<<<< HEAD
};
=======
}
>>>>>>> f8fecb742d436b81f95e3768bbcbd4a96559bf30
