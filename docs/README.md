# Introduction

![](https://raw.githubusercontent.com/SimonDevelop/docs-sirene/master/docs/.vuepress/public/assets/img/logo.png)

[Sirene](https://github.com/SimonDevelop/sirene) est une librairie php vous permettant d'utiliser l'api Sirene de l'insée via des fonctions pour facilité la recherche d'etablissement.

## Prérequis

- **[Php](https://secure.php.net/) >= 8.1**
> Cette librairie nécessite une version récente de php

## Installation

### Composer
``` bash
$ composer require simondevelop/sirene
```

## Utilisation

### Clef API
- Rendez-vous sur [portail-api.insee.fr](https://portail-api.insee.fr) pour créer votre compte gratuitement puis une fois connecté, aller dans l'onglet `Applications`.
- Cliquez sur `CREATE AN APP` et suivez les instructions pour la création de votre application utilisant l'api sirene en précisent le type `backend to backend`.
- Une fois l'application créée, sélectionner le et allez dans la partie `Subscriptions` de votre application.
- Vous pouvez sélectionner en cliquant sur `API Sirene` dans la liste plus bas et vous avez votre clef d'api qui s'affiche à votre droite.

### Exemple php
``` php
<?php
require_once "vendor/autoload.php";
use \SimonDevelop\Sirene;

$sirene = new Sirene("votre-clef-api");
```
Vous pouvez ajouter en 2e paramètre l'url de l'api sirene si une nouvelle version est disponible (pensez à vérifier la compatibilité).