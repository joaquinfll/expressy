/* metrics.js */
'use strict';

const promBundle = require("express-prom-bundle");
const metricsMiddleware = promBundle({includeMethod: true});
const { MeterProvider } = require('@opentelemetry/metrics');
const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');
const meter = new MeterProvider({
  exporter: new PrometheusExporter({port: 9090}),
  interval: 1000,
}).getMeter('prometheus');