var albums = [
    {albumTitle: 'L\'appel du Vide', seriesTitle: 'Chronicles of Sado: Chapter One', tracks: 'Five'},
    {albumTitle: 'Suppressed Aggression', seriesTitle: 'Chronicles of Sado: Chapter Two', tracks: 'Five'},
    {albumTitle: 'untitled', seriesTitle: 'Chronicles of Sado: Chapter Three', tracks: 'Five'},
    {albumTitle: 'The Era of Artificial Intelligence and Organic Idiocracy', seriesTitle: 'The Socio-Political Series', tracks: 'Thirteen'},
    {albumTitle: 'Overmedicated', seriesTitle: 'Chronicles of Sado: Chapter Four', tracks: 'Five'},
    {albumTitle: 'Chronicles of Sado (remastered)', seriesTitle: 'Chronicles of Sado: Chapter 1-4', tracks: 'Twenty'},
    {albumTItle: 'Odis Mills Presents: Socialist Slim', seriesTitle: 'The Socio-Political Series', tracks: 'Eighteen'}
];

exports.getAll = () =>  {
    return albums;
}
  
exports.getOne = (albumTitle) => {
    let  album = [];
    for (let i = 0; i < albums.length; i++) {
        if (albums[i].albumTitle === albumTitle) {
        album.push(albums[i]);
        }
    }
    return album;
}

exports.deleteOne =  (albumTitle) => {
    let album = [];
    for (let i = 0; i < albumTitle.length; i++) {
        if (albums[i].albumTitle !== albumTitle) {
        album.push(albums[i]);
        }
    }
    console.log("Deleting " + albumTitle + " from the list");
    return album;
}