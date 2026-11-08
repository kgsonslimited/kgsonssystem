#!/bin/bash
# 1. Primary Blue Logo from mockup (clean crop)
convert public/assets/aistudio/file_00000000b99881f4b774de7b71ff0dac_be66cbf2.png -crop 270x72+110+38 +repage public/assets/images/kgsons_logo_blue_nav.png

# 2. Original Company Profile Logo (from page 2)
convert public/assets/pdf_pages/page_02.png -crop 580x190+50+30 +repage public/assets/images/kgsons_logo_profile_original.png

# 3. MD / Chairman portrait (page 3)
convert public/assets/pdf_pages/page_03.png -crop 510x480+40+275 +repage public/assets/images/md_portrait.png

# 4. MD Signature (page 3)
convert public/assets/pdf_pages/page_03.png -crop 280x80+620+685 +repage public/assets/images/md_signature.png

# 5. Core Division images (from page 4 and 1)
convert public/assets/pdf_pages/page_04.png -crop 420x460+600+270 +repage public/assets/images/wooden_door_showcase.png
convert public/assets/pdf_pages/page_01.png -crop 570x330+50+440 +repage public/assets/images/doors_hero_thumb.png
convert public/assets/pdf_pages/page_01.png -crop 570x330+620+440 +repage public/assets/images/electrical_hero_thumb.png
convert public/assets/pdf_pages/page_01.png -crop 570x330+50+790 +repage public/assets/images/plumbing_hero_thumb.png
convert public/assets/pdf_pages/page_01.png -crop 570x330+620+790 +repage public/assets/images/cleaning_hero_thumb.png

# 6. Team Full Group Photo (page 14)
convert public/assets/pdf_pages/page_14.png -crop 1160x520+40+340 +repage public/assets/images/team_group_full.png

# 7. Team categories (page 14)
convert public/assets/pdf_pages/page_14.png -crop 280x280+35+600 +repage public/assets/images/team_carpentry.png
convert public/assets/pdf_pages/page_14.png -crop 280x280+325+600 +repage public/assets/images/team_electrical.png
convert public/assets/pdf_pages/page_14.png -crop 280x280+615+600 +repage public/assets/images/team_plumbing.png
convert public/assets/pdf_pages/page_14.png -crop 280x280+905+600 +repage public/assets/images/team_cleaning.png

# 8. Wood doors types and finishes (page 9)
convert public/assets/pdf_pages/page_09.png -crop 560x340+500+330 +repage public/assets/images/wood_types_grid.png
convert public/assets/pdf_pages/page_09.png -crop 560x170+500+480 +repage public/assets/images/wood_finishes_grid.png
convert public/assets/pdf_pages/page_08.png -crop 580x560+420+260 +repage public/assets/images/luxury_double_door.png
convert public/assets/pdf_pages/page_08.png -crop 380x300+605+615 +repage public/assets/images/artisan_carpenter.png

# 9. Electrical panels and supplies (page 10)
convert public/assets/pdf_pages/page_10.png -crop 560x350+500+540 +repage public/assets/images/electrical_technician_panel.png
convert public/assets/pdf_pages/page_10.png -crop 560x320+320+310 +repage public/assets/images/electrical_cables_supplies.png

# 10. Plumbing fixtures (page 11)
convert public/assets/pdf_pages/page_11.png -crop 540x510+560+310 +repage public/assets/images/plumbing_faucet_flow.png
convert public/assets/pdf_pages/page_11.png -crop 360x360+40+520 +repage public/assets/images/plumbing_sanitary_ware.png
convert public/assets/pdf_pages/page_11.png -crop 360x360+410+520 +repage public/assets/images/plumbing_basin.png
convert public/assets/pdf_pages/page_11.png -crop 360x360+780+520 +repage public/assets/images/plumbing_pipes_fittings.png

# 11. Cleaning services (page 12)
convert public/assets/pdf_pages/page_12.png -crop 570x520+520+280 +repage public/assets/images/cleaning_specialist_window.png
convert public/assets/pdf_pages/page_12.png -crop 360x280+35+580 +repage public/assets/images/cleaning_commercial_office.png
convert public/assets/pdf_pages/page_12.png -crop 360x280+420+580 +repage public/assets/images/cleaning_post_construction.png
convert public/assets/pdf_pages/page_12.png -crop 360x280+800+580 +repage public/assets/images/cleaning_window_exterior.png

# 12. Project portfolio (page 13)
convert public/assets/pdf_pages/page_13.png -crop 570x350+35+340 +repage public/assets/images/project_doors_arusha.png
convert public/assets/pdf_pages/page_13.png -crop 570x350+625+340 +repage public/assets/images/project_building_dar.png
convert public/assets/pdf_pages/page_13.png -crop 370x280+35+570 +repage public/assets/images/project_electrical_office.png
convert public/assets/pdf_pages/page_13.png -crop 370x280+425+570 +repage public/assets/images/project_plumbing_hotel.png
convert public/assets/pdf_pages/page_13.png -crop 370x280+815+570 +repage public/assets/images/project_cleaning_corp.png

# 13. Compliance certificates & badges (page 15)
convert public/assets/pdf_pages/page_15.png -crop 270x240+30+350 +repage public/assets/images/cert_brela.png
convert public/assets/pdf_pages/page_15.png -crop 270x240+310+350 +repage public/assets/images/cert_tra.png
convert public/assets/pdf_pages/page_15.png -crop 270x240+590+350 +repage public/assets/images/cert_nest.png
convert public/assets/pdf_pages/page_15.png -crop 270x240+870+350 +repage public/assets/images/cert_quality.png

# 14. Partner logos (page 16)
convert public/assets/pdf_pages/page_16.png -crop 1160x230+40+530 +repage public/assets/images/partner_logos_strip.png

# 15. HSE & Sustainability (page 18 & 19)
convert public/assets/pdf_pages/page_18.png -crop 480x480+370+350 +repage public/assets/images/hse_officer.png
convert public/assets/pdf_pages/page_19.png -crop 650x450+430+380 +repage public/assets/images/future_sustainability_earth.png

# 16. Executive Handshake (page 20)
convert public/assets/pdf_pages/page_20.png -crop 620x620+470+290 +repage public/assets/images/executive_partnership_handshake.png

# 17. Hero banner backdrop with Kilimanjaro and modern headquarters (from mockup)
convert public/assets/aistudio/file_00000000b99881f4b774de7b71ff0dac_be66cbf2.png -crop 1536x400+0+110 +repage public/assets/images/hero_building_kilimanjaro.png

echo "Assets extraction finished successfully!"
