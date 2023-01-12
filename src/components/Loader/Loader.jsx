import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Loader() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={100} />
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={100} />
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={100} />
      <Skeleton variant="rounded" height={50} />
    </Stack>
  );
}
