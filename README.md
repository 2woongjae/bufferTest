### bufferTest

- server/main.js => bin/.server 로 만들었습니다.
- test.js 에서 bin/.server 를 spawn 으로 불렀습니다.
- options.stdio = [child.stdin, child.stdout, child.stderr] 로 셋팅할 수 있습니다.
- default 는 ['pipe', 'pipe', 'pipe'] 입니다.
- ['ignore', 'ignore', 'ignore'] 로 변경하면 스트림이 아예 생성 되지 않습니다.
- 관련 링크 : https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html#child_process_options_stdio