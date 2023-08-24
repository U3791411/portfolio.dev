'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  return (
    <div>
      <p>Oh No, Something Went Wrong... Try Refreshing</p>
    </div>
  );
}