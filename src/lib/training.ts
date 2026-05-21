import { trainingPrograms } from "./training-content";

export function getTrainingProgram(slug: string) {
  return trainingPrograms.find((p) => p.slug === slug);
}

export function getAllTrainingSlugs() {
  return trainingPrograms.map((p) => p.slug);
}
