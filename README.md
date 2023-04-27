---
# Speed Test with Headless Chrome

[![Build Status](https://github.com/nephelaiio/node-speedtest/actions/workflows/demo.yml/badge.svg)](https://github.com/nephelaiio/node-speedtest/actions)

This repository contains a simple speed test implementation using the Cloudflare SpeedTest API and runs it in a headless Chrome browser using Puppeteer.

Configuration reflects minimal measurement settings as declared by cloudflare/speedtest library [configuration](https://github.com/cloudflare/speedtest/blob/main/src/config/defaultConfig.js) and is meant as a starting point to produce and test settings that allow minimally intrusive and reliable tests from endpoints; PRs are welcome

## Files

- `index.html`: This file contains the HTML and JavaScript code for running the speed test using the Cloudflare SpeedTest API.
- `run-headless.js`: This Node.js script uses Puppeteer to launch a headless Chrome browser, run the speed test from `index.html`, and capture the console.log statements in the terminal.

## Prerequisites

The following packages/applications must be available in the environment

- [Node.js](https://nodejs.org/)
- [Chrome browser](https://www.google.com/chrome/)

Repository was developed and tested against Ubuntu latest version

## Usage

1. Clone the repository:

```
git clone https://github.com/nephelaiio/node-speedtest.git
cd node-speedtest
```

2. Install the required dependencies:

```
npm install
```

3. Run the speed test in headless Chrome:

```
npm test
```

The console.log statements from the `index.html` file will be printed to stdout as the speed test progresses.

See our [demo workflow](https://github.com/nephelaiio/node-speedtest/actions/workflows/demo.yml) for more details and sample output
