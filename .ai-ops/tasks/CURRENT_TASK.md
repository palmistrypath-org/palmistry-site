# Relay Current Task

Status: NO TASK AUTHORIZED

Palmistry Path Relay v2B is waiting for the ChatGPT Director to select the next bounded task.

The Director must create the immutable packet at `.ai-ops/tasks/<TASK_ID>.md`, mirror the authorized Task ID + Revision into this file, update metrics/bookkeeping as needed, and write `.ai-ops/state.json` **last** with `status: READY_FOR_CLAUDE`.

No Claude worker run is authorized while `state.status` is `READY_FOR_DIRECTOR`.
