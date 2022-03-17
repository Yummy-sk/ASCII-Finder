const ROOT_API =
  'https://gist.githubusercontent.com/Yummy-sk/cacdd473b108ab02f2db68439382ce9e/raw/81d5d7ee3e98b07e3c6101f1a061591a8af73210/ascii';

export async function _fetch() {
  try {
    const response = await fetch(ROOT_API);
    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e);
  }
}
