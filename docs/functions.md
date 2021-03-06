# Fonctions

Liste des divers fonctionnalités de l'objet `Sirene`.

## Siren
La fonction `siren(string $siren)` vous permet de faire une recherche depuis un siren donné, les informations d'un ou plusieurs établissements vous seront donnez dans le tableau `uniteLegale`.
``` php
<?php
$result = $sirene->siren("<siren>");
```
Le resultat retourne un tableau comme ceci :
```
array(2) {
  'header' =>
  array(2) {
    'statut' =>
    int(200)
    'message' =>
    string(2) "OK"
  }
  'uniteLegale' =>
  array(x) {
    ...
  }
}
```


## Siret
La fonction `siret(string $siren)` vous permet de faire une recherche depuis un siret donné, les informations de l'établissement vous seront donnez dans le tableau `etablissement`.
``` php
<?php
$result = $sirene->siret("<siret>");
```
Le resultat retourne un tableau comme ceci si résultat trouvé:
```
array(2) {
  'header' =>
  array(2) {
    'statut' =>
    int(200)
    'message' =>
    string(2) "ok"
  }
  'etablissement' =>
  array(x) {
    ...
  }
}
```


## SearchEtablissement
La fonction `searchEtablissement(array $params)` vous permet de faire des recherches d'établissements avec des paramètres, les informations des établissements vous seront donnez dans le tableau `etablissements`, vous disposez aussi du nombre de résultat dans le tableau `header`.
``` php
<?php
$params = [
    "city" => "Bordeaux",
    "cp" => "33000"
];
$result = $sirene->searchEtablissement($params);
```
Le resultat retourne un tableau comme ceci si résultat trouvé:
```
array(2) {
  'header' =>
  array(5) {
    'statut' =>
    int(200)
    'message' =>
    string(2) "OK"
    'total' =>
    int(111937)
    'debut' =>
    int(0)
    'nombre' =>
    int(20)
  }
  'etablissements' =>
  array(20) {
    ...
  }
}
```

Voici les différents paramètres disponibles, chaque clé a une référence dans l'API sirene:
``` php
$list = [
    "city" => "libelleCommuneEtablissement",
    "cp" => "codePostalEtablissement",
    "company" => "denominationUniteLegale",
    "sigle" => "sigleUniteLegale",
    "ape" => "activitePrincipaleUniteLegale",
    "cj" => "categorieJuridiqueUniteLegale"
];
```

## Pagination
Avec cette même fonction `searchEtablissement(array $params, string $tri = "siren", int $page = 1, int $nombre = 20)`, vous pouvez définir le nombre de résultat par page et l'ordre de tri par champ:
``` php
$result = $Sirene->searchEtablissement([
    "city" => "BORDEAUX"
], "siret", 1, 5);
```
Ici je tri par `siret`, affichage de la page `1` pour `5` résultats par page.
