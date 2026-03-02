import { useActor } from "./useActor";

/**
 * Returns a convenient backend-call wrapper that uses the actor.
 * Since this is a public B2B site, anonymous actor is used for all calls.
 */
export function useBackend() {
  const { actor, isFetching } = useActor();
  return { actor, isLoading: isFetching };
}
