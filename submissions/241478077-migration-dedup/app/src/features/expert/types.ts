export enum SessionStatus {
  REQUESTED = 'REQUESTED',
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  RESOLVED = 'RESOLVED'
}

export interface ExpertProfile {
  id: string;
  name: string;
  specialty: string[];
  rating: number;
  isOnline: boolean;
}

export interface ExpertSession {
  sessionId: string;
  userId: string;
  expertId: string | null;
  status: SessionStatus;
  startedAt: string;
  endedAt?: string;
  contextSnapshotId: string;
}

export interface SessionContext {
  currentStep: number;
  unresolvedAmbiguity: string;
  voiceChannelToken: string;
}
