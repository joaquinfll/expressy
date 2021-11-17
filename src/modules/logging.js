const bunyan = require('bunyan');
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { BunyanInstrumentation } = require('@opentelemetry/instrumentation-bunyan');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');


registerInstrumentations({
  instrumentations: [
    new BunyanInstrumentation({
      // Optional hook to insert additional context to bunyan records.
      // Called after trace context is added to the record.
      logHook: (span, record) => {
        record['resource.service.name'] = provider.resource.attributes['service.name'];
      },
    }),
    // other instrumentations
  ],
});

log = bunyan.createLogger({name: "microservice"});