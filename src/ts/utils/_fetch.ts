const ROOT_API =
  'https://gist.githubusercontent.com/Yummy-sk/cacdd473b108ab02f2db68439382ce9e/raw/08dce13d80694e634adf3fdb97b6cab2d102379a/ascii';

export async function _fetch() {
  try {
    const response = await fetch(ROOT_API);
    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e);
  }
}
