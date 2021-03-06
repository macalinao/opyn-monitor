import React, { useState, useMemo } from 'react';

import {
  Box, DataView, IdentityBadge, TransactionBadge,
} from '@aragon/ui';


import { getExerciseHistory } from '../../utils/graph';
import { formatDigits, toTokenUnitsBN, timeSince } from '../../utils/number';

type exerciseEntry = {
  amtCollateralToPay: string;
  exerciser: string;
  oTokensToExercise: string;
  timestamp: string;
  transactionHash: string;
}

function ExerciseHistory({
  owner, token, collateralDecimals, tokenDecimals,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState<exerciseEntry[]>([]);

  useMemo(async () => {
    const actions = await getExerciseHistory(owner, token);
    setEntries(actions);
    setIsLoading(false);
  }, [owner, token]);

  return (
    <>
      {/* History Section */}
      <Box heading="History">
        <DataView
          status={isLoading ? 'loading' : 'default'}
          fields={['Tx', 'Collateral', 'oToken', 'Exerciser', 'Time']}
          entries={entries}
          entriesPerPage={4}
          renderEntry={({
            amtCollateralToPay, oTokensToExercise, exerciser, timestamp, transactionHash,
          }: exerciseEntry) => [
            <TransactionBadge transaction={transactionHash} />,
            formatDigits(
              toTokenUnitsBN(amtCollateralToPay, collateralDecimals).toNumber(),
              5,
            ),
            formatDigits(
              toTokenUnitsBN(oTokensToExercise, tokenDecimals).toNumber(),
              5,
            ),
            <IdentityBadge entity={exerciser} />,
            timeSince(parseInt(timestamp, 10) * 1000),
          ]}
        />
      </Box>
    </>
  );
}

export default ExerciseHistory;
