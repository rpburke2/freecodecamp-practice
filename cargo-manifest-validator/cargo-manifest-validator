function normalizeUnits(manifest) {
  const copy = { ...manifest };
  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45;
    copy.unit = "kg";
  }
  return copy;
}

function validateManifest(manifest) {
  const result = {};

  // containerId: must be a positive integer
  if (!("containerId" in manifest)) {
    result.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    result.containerId = "Invalid";
  }

  // destination: must be a non-empty string (after trimming)
  if (!("destination" in manifest)) {
    result.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    result.destination = "Invalid";
  }

  // weight: must be a positive number (not NaN)
  if (!("weight" in manifest)) {
    result.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    result.weight = "Invalid";
  }

  // unit: must be "kg" or "lb"
  if (!("unit" in manifest)) {
    result.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    result.unit = "Invalid";
  }

  // hazmat: must be a boolean
  if (!("hazmat" in manifest)) {
    result.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    result.hazmat = "Invalid";
  }

  return result;
}

function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}   
