
# full-stack-interview

  

This repository contains the World of V interview challenge. Included in the repository is a working REST API server based on the [NestJS](https://docs.nestjs.com) framework. The album module defined in the schema will not be used during the challenge but is included as a guide for structuring the code.

  

## Installation

  

```bash

$  npm  install

```

  

## Running the app

  

```bash

$  npm  run  start:dev

```

  

## Database description

  

The `chinook.sqlite` file at the root of the repository contains a copy of the [chinook database](https://github.com/lerocha/chinook-database) as data source for the queries. The `schema.png` file is a diagram of the database model included in the repo for convenience. Only a few of the tables will be used in this exercise, the rest can be safely ignored.

  

## Tasks

### Challenge 1

Write a new controller for the track resource that includes the actions to get a single track by id, and all the tracks based on some filters. 

**BONUS**: Sanitize the request by using `class-validator` decorators.

#### Query Strings

  

| name | description |

| ---------- | --------------------------------------------- |

| artistName | **Name** of the track's artist. |

| genreName | **Name** of the track's genre. |

| minPrice | Minimum price of the track, inclusive. |

| maxPrice | Maximum price of the track, exclusive. |

| page | Index of the requested page, starting from 0. |

| pageSize | Size of a single page. |

  

#### Response format

  

| name | description | unit |

| -------- | ---------------------------- | ------- |

| id | ID of the track. | - |

| name | Name of the track. | - |

| price | Price of the track. | $ |

| duration | Duration of the track. | seconds |

| genre | **Name** of the track genre. | - |

  

### Challenge 2

  

See [../frontend/README.md](../frontend/README.md) for details.

  

### Challenge 3 (**OPTIONAL**)

  

Add the `statistics controller` to let the customers see some statistics data about the albums and the tracks.

 1. Write an endpoint to get how many tracks a specific artist (take artistId from query string) made.
 2. **BONUS:**  write an endpoint to get the top 10 best-selling tracks in a given period of time.

**N.B.** It's not necessary to integrate the statistics controller in the frontend.

## Evaluation criteria

  

1. Correctness - The endpoints should return the correct data based on the supplied parameters.

2. Security - The code should not contain vulnerabilities (e.g. sql injection).

3. Efficency - All queries should make use of indexes when possible and should remain fast as the size of the dataset increases.

4. Mantainability - The code should be clear and easy to modify.

  

## Submitting you work

You can send the complete exercise via mail to `giacomobenati@mailbox.org` as a link to your fork on GitHub/GitLab/BitBucket.

It's important that you use git to handle the versioning of the software. Don't push large commits, it's preferable to have small commits based on what you have done.