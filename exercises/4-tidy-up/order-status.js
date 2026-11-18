// computes the status
export function calc(t) {
  let s = "to_do";
  let x = 0;
  let y = 0;
  if (t.length == 0) {
    return "to_do";
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i].step == "Done" || t[i].step == "Loss") {
      x = x + 1;
    }
    if (t[i].step != "To do") {
      y = y + 1;
    }
  }
  if (x == t.length) {
    s = "done";
  } else {
    if (y > 0) {
      s = "in_progress";
    } else {
      // s = 'to_do'
      s = "to_do";
    }
  }
  // console.log(s)
  return s;
}
