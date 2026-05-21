#!/usr/bin/env bash
# Cloud, DevOps, servers, and software engineering only (Pexels — commercial use OK)
set -uo pipefail
cd "$(dirname "$0")/../public/images"

dl() {
  if curl -fsSL -A "Mozilla/5.0" "$1" -o "$2"; then
    echo "ok $2"
    return 0
  fi
  echo "FAIL $2"
  return 1
}

BASE="https://images.pexels.com/photos"
Q="?auto=compress&cs=tinysrgb&w=1200"

# Heroes & programs
dl "${BASE}/325111/pexels-photo-325111.jpeg${Q}" "hero-azure-linux.jpg"      # server room
dl "${BASE}/5474296/pexels-photo-5474296.jpeg${Q}" "program-azure.jpg"       # developer at workstation
# hero-devops-azure.png — Microsoft Learn Azure DevOps toolchain; do not overwrite
# program-devops.jpg — custom Magnific isometric DevOps illustration; do not overwrite
dl "${BASE}/737613/pexels-photo-737613.jpeg${Q}" "hero-startup.jpg"          # data center
dl "${BASE}/7567443/pexels-photo-7567443.jpeg${Q}" "startup-team.jpg"        # cloud / server environment

# Training & services
dl "${BASE}/1181263/pexels-photo-1181263.jpeg${Q}" "training.jpg"             # programming
dl "${BASE}/577585/pexels-photo-577585.jpeg${Q}" "training-banner.jpg"      # code on monitor
dl "${BASE}/325229/pexels-photo-325229.jpeg${Q}" "startup-banner.jpg"       # server rack

# About
dl "${BASE}/546819/pexels-photo-546819.jpeg${Q}" "intro.jpg"                 # software on laptop
dl "${BASE}/1148820/pexels-photo-1148820.jpeg${Q}" "about.jpg"               # server racks
dl "${BASE}/443383/pexels-photo-443383.jpeg${Q}" "about-story.jpg"           # developer coding

# Values (each unique)
dl "${BASE}/2599244/pexels-photo-2599244.jpeg${Q}" "value-clarity.jpg"       # source code screen
dl "${BASE}/1181675/pexels-photo-1181675.jpeg${Q}" "value-practice.jpg"      # hands-on coding
dl "${BASE}/1181677/pexels-photo-1181677.jpeg${Q}" "value-responsiveness.jpg" # developer at keyboard

# Cloud / ops offerings
dl "${BASE}/288477/pexels-photo-288477.jpeg${Q}" "cloud-infra.jpg"            # network / cabling
dl "${BASE}/1181354/pexels-photo-1181354.jpeg${Q}" "l1l2-support.jpg"       # NOC / monitoring screens
dl "${BASE}/159888/pexels-photo-159888.jpeg${Q}" "servers.jpg"              # server hardware

# Contact & home sections
dl "${BASE}/5716001/pexels-photo-5716001.jpeg${Q}" "contact.jpg"             # cloud / tech workspace
dl "${BASE}/1181467/pexels-photo-1181467.jpeg${Q}" "contact-training.jpg"    # software development
# contact-startup.jpg — Pexels software architecture (34803991); do not overwrite
dl "${BASE}/8849284/pexels-photo-8849284.jpeg${Q}" "team.jpg"                # software engineering
dl "${BASE}/4968394/pexels-photo-4968394.jpeg${Q}" "process.jpg"              # cloud computing

# Remove legacy / non-IT assets
rm -f faq.jpg placeholder-*.svg 2>/dev/null || true

echo "Done: $(ls -1 *.jpg 2>/dev/null | wc -l | tr -d ' ') JPG files (IT/cloud only)."
