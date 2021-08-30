const ids = new Set(["Hi", "from", "set!"]);
ids.add(2);
ids.delete("Hi");

for (const entry of ids.values()) {
  console.log(entry);
}
