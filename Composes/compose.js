// Importing the necessary modules
import fs from 'fs'
import yargs from 'yargs'

// Command line arguments setup
const argv = yargs(process.argv)
  .option('f', {
    alias: 'filepath',
    describe: 'Path to the compose file',
    demandOption: true,
    type: 'string'
  })
  .option('e', {
    alias: 'edge',
    describe: 'Number of edge servers + databases',
    demandOption: true,
    type: 'number'
  })
  .option('b', {
    alias: 'broker',
    describe: 'Number of brokers',
    demandOption: true,
    type: 'number'
  })
  .option('d', {
    alias: 'cloudDB',
    describe: 'Number of cloud databases',
    demandOption: true,
    type: 'number'
  })
  .option('s', {
    alias: 'filesys',
    describe: 'Number of cloud filesystems',
    demandOption: true,
    type: 'number'
  })
  .argv;

  /* Honestly do this only once you really need to scale up the system,
     and have already implemented the filesystem at the cloud. Until then
     might be a waste of time */

console.log(`Generating a docker-compose file at ${argv.filepath} that defines: \n
            ${argv.edge} edge environments (e-srv + pg) \n
            ${argv.broker} brokers (c-srv) \n
            ${argv.cloudDB} cloud databases (cpg) \n
            ${argv.filesys} cloud filesystems (cfs) \n`);

// Example usage:
// node compose.js -f Test-Postgres-Sync/test.yml -e 2 -b 1 -d 1 -s 0

let EDGE_ENV_NUM = 1;

function write_edge_srv(edge_id) {

}

function write_edge_db(edge_id) {

    return(
    ` 
    pg1:
    container_name: pg1
    image: postgres
    restart: always
    ports:
    - 5432:5431
    environment:
    POSTGRES_PASSWORD: pass
    EDGE_ID: 1
    networks:
    swade-net:
        ipv4_address: 172.31.0.7 # 0.1 is always in use for some reason
    volumes:
    - /c/Users/soula/OneDrive/Desktop/Programming/IoT-SITY/PostGRES-Scripts/:/docker-entrypoint-initdb.d
    - pg1_data:/var/lib/postgresql/data
    `)
}

function write_edge_env(edge_id) {

}
