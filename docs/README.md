# Introduction

![](https://raw.githubusercontent.com/SimonDevelop/docs-sirene/master/docs/.vuepress/public/assets/img/logo.png)

[Sirene](https://github.com/SimonDevelop/sirene) est une librairie php vous permettant d'utiliser l'api Sirene de l'insée via des fonctions pour facilité la recherche d'etablissement.

## Prérequis

- **[Php](https://secure.php.net/) >= 7.3**
> Cette librairie nécessite une version récente de php


## Installation

### Composer
``` bash
$ composer require simondevelop/sirene
```

## Utilisation

### Clefs API
- Rendez-vous sur [api.insee.fr](https://api.insee.fr/catalogue/), créer votre compte gratuitement puis une fois connecté, aller dans l'onglet `MES APPLICATIONS`.
- Cliquez sur `AJOUTER UNE APPLICATION`, nommé là comme vous le souhaitez, la description peut être vide.
- Une fois l'application ajouté, rendez-vous dans l'onglet `LES API DE L'INSEE` puis sélectionner `Sirene V3`.
- Cliquez sur le bouton `Souscrire` sur votre droite après avoir sélectionné l'application que vous avez ajouté précédemment.
- Une fois cela fait, retourner dans `MES APPLICATIONS`, sélectionner la votre et aller dans la partie `Clefs et jetons d'accès`.
- Cliquez sur le bouton `Regénérer` en bas et vous obtiendrez vos clefs d'API, `Clef du consommateur` et `Secret du consommateur`.
- Pour obtenir votre clef pour la librairie php Sirene, il vous faudra utilisation la fonction `base64_encode` de php, voir ci-dessous.

### Exemple php
``` php
<?php
require_once "vendor/autoload.php";
use \SimonDevelop\Sirene;

$sirene = new Sirene([
  "secret" => base64_encode("<Clef du consommateur>:<Secret du consommateur>"),
  "jwt_path" => __DIR__ // Chemin où sera stocké le token d'accès (fichier json)
]);
```
