#!/usr/bin/env python3
"""Pin the Bulwark Lite CSP connect-src to a single JMAP origin."""

import pathlib
import re
import sys


def main() -> None:
    origin = sys.argv[1].rstrip("/")
    path = pathlib.Path(sys.argv[2] if len(sys.argv) > 2 else "staging/_headers")
    text = path.read_text()
    patched, count = re.subn(
        r"connect-src [^;]+;",
        f"connect-src 'self' {origin};",
        text,
        count=1,
    )
    if count != 1:
        raise SystemExit("connect-src not found in _headers")
    path.write_text(patched)
    print(f"Pinned connect-src to {origin}")


if __name__ == "__main__":
    main()
