import { useEffect, useState } from "react";

// Current date that is safe to render in prerendered HTML.
// The server HTML is frozen at build time, so the first render uses the build date (the same value on server and
// client, which avoids a hydration mismatch) and switches to the real date right after mount.
export const useNow = () => {
  const [now, setNow] = useState(() => new Date(process.env.NEXT_PUBLIC_BUILD_TIME));
  useEffect(() => setNow(new Date()), []);
  return now;
};
