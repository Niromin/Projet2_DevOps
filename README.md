# DevOps Mini-Projet 2

Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations

-   N° de groupe : 69
-   Membres du groupe : Quiambao Roemer-Trinité, Belbachir Rayane

## Énoncé

### Pré-requis :

-   Sur base de votre mini-projet 1 (TDD)
-   Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
-   Utilisation pulls requests

### Ajouter ce fichier MD à votre mini-projet-1

Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue

L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request

Ouvrez une Pull Request / Merge Request
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.

Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

-   Décrivez brièvement ce que fait votre fichier YML.

```bash
Lorsqu'on fait un pull request, cela va appeler notre fichier YML qui correspond à la pipeline. Ce fichier permet de vérifier plusieurs étapes qui ont été définis dans l'intégration continue. Il comprend des étapes telles que la récupération du code source, l'installation des dépendances, le formatage du code, la vérification de la conformité, l'exécution des tests, la construction du projet et l'affichage de messages de début et de fin, ainsi qu'un message de succès si la pipeline s'exécute sans erreur.
```

-   En particulier : à quoi sert le “on” ? dans votre fichier YML ? Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ?

```bash
Le "on" correspond au fait de déclencher la pipeline.

Le "on: pull_request" : Cela signifie que le pipeline sera déclenché chaque fois qu'une pull request est ouverte ou mise à jour.

Le "on: push" : est activé à chaque fois qu'un nouveau commit est push sur une branche spécifique.

Il est recommandé pour les juniors de faire une pull_request car cela permet de vérifier des modifications avant d'appliquer merge sur la branche main ce qui apporte une sécurité en plus évitant des bugs ou des erreurs.
```

-   Quelle est la différence entre run et run_on ? Expliquez par rapport à votre pipeline.

```bash
Le "runs-on" : spécifie l'environnement sur lequel les étapes du pipeline seront exécutées.

Le "run" : permet de définir des commandes ou des scripts ex : lorsque la pipeline s'exécute cela va lancer la commande tels que "npm install", "npm run prettier", "npm run lint".
```

-   Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline.

```bash
Le "use" est utilisé pour incorporer des actions externes préconstruites dans le pipeline, alors que "run" est utilisé pour exécuter des commandes ou des scripts dans l'environnement défini par le champ "runs-on".

Dans notre fichier, l'étape "Checkout Repository" utilise une action externe avec uses: actions/checkout@v2, qui permet de cloner le dépôt dans l'environnement d'exécution.
```

-   Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline.

```bash
Oui, par exemple on peut intervertir entre prettier et test. On peut d'abord commencer à run les test et ensuite prettier.
```

-   Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ? Quelles questions devriez-vous vous poser ?

```bash
On pourrait ajouter une nouvelle étape sur le pipeline en mettant un nouveau run qui exécutera le fichier. Par exemple :

name: Security Test with secure_app
run: ./secure_app
```
