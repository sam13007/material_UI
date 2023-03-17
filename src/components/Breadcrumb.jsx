import { Breadcrumbs, Link } from "@mui/material";
import React, { useState } from "react";

function Breadcrumb() {
  const [active, setActive] = useState(0);
  return (
    <div style={{ padding: "10px" }}>
      <Breadcrumbs
        value={active}
        onClick={(e, newValue) => setActive(newValue)}
        separator="-"
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link variant="body1">Home</Link>
        <Link variant="body1">Profile</Link>
        <Link variant="body1">User</Link>
        <Link variant="body1">Shyam</Link>
        <Link variant="body1">Basket</Link>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
