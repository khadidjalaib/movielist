import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import"./MovieList.css"

const MovieList = () => {
    return (
        <div className="liste">
           
            <MovieCard  Title="harry potter"
             
            description="Orphelin, le jeune Harry Potter peut enfin quitter ses 
            tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle 
            qu'il est un sorcier. À 11 ans, Harry va enfin pouvoir intégrer la légendaire école de sorcellerie 
            de Poudlard, y trouver une famille digne de ce nom et des amis, développer ses dons, et préparer son glorieux avenir."
             rate="90%"></MovieCard>
             <MovieCard  Title="hunger games"
            description="Après que sa soeur a été sélectionnée
             pour participer aux violents 'Hunger Games',' Katniss Everdeen décide de se porter
              volontaire pour libérer sa soeur de son fardeau. La jeune femme et son comparse du District 12, 
              Peeta, devront affronter 22 autres adolescents ayant entre 12 et 18 ans, jusqu'à la mort."
             rate="85%"></MovieCard>
             <MovieCard  Title="don't breath"
            description="Pour échapper à la violence de sa mère et sauver sa jeune soeur d'une existence sans avenir, 
            Rocky est prête à tout. Avec ses amis Alex et Money, elle a déjà commis quelques cambriolages, mais rien qui ne
            rapporte assez pour enfin quitter Détroit. Lorsque le trio entend parler d'un aveugle qui vit en solitaire et garde chez lui une petite fortune, 
            ils décident de préparer ce qu'ils pensent être leur ultime coup. Néanmoins, leur victime va se révéler plus dangereuse que prévu."
             rate="80%"></MovieCard>
             <MovieCard  Title="conjuring"
            description="L'histoire horrible, mais vraie, d'Ed et Lorraine Warren, enquêteurs paranormaux 
            réputés dans le monde entier, venus en aide à une famille terrorisée par une présence inquiétante dans leur ferme isolée.
             Contraints d'affronter une créature démoniaque d'une force redoutable, les Warren se retrouvent face à 
             l'affaire la plus terrifiante de leur carrière."
             rate="70%"></MovieCard>
             
              

        </div>
    )
}

export default MovieList
