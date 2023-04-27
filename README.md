---
# Speed Test with Headless Chrome

[![Build Status](https://github.com/nephelaiio/node-speedtest/workflows/demo/badge.svg)](https://github.com/nephelaiio/node-speedtest/actions)

This repository contains a simple speed test implementation using the Cloudflare SpeedTest API and runs it in a headless Chrome browser using Puppeteer.

## Files

- `index.html`: This file contains the HTML and JavaScript code for running the speed test using the Cloudflare SpeedTest API.
- `run-headless.js`: This Node.js script uses Puppeteer to launch a headless Chrome browser, run the speed test from `index.html`, and capture the console.log statements in the terminal.

## Prerequisites

The following packages/applications must be available in the environment

- [Node.js](https://nodejs.org/)
- [Chrome browser](https://www.google.com/chrome/)

Repository was developed and tested against Ubuntu latest version, see 

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
node run-headless.js
```

The console.log statements from the `index.html` file will be printed to stdout as the speed test progresses.
