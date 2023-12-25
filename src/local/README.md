# Local server (local).
The local server collects the data of all the meters and devices (IEDs).
It needs to be efficient managing all the signals (IO).

## Why a "local server"?
The local server aims to take three four important roles:
1. To aquire the data from the devices via the supported protocols [(see the docs)](./../../docs/protocols/README.md).
2. To expose a web API to deliver the data via HTTP/HTTPS o the operator and the central server.
3. To write the data into the local database.
4. To process and route the commands from the central and the local control to the devices.

## Run
To run this module, open a terminal in the folder and run:
```shell
npm install
npm install -g tsx
tsx watch index.ts
```
If you, as me, prefer bun, just run:
```shell
bun install
bun --watch index.ts
```
