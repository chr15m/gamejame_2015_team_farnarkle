MKFILE_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
MYDIR := $(dir $(MKFILE_PATH))

MUSIC_SRC_DIR := $(MYDIR)resources/tracker-files
MUSIC_OUT_DIR := $(MYDIR)resources/public/music
SFX_DIR := $(MYDIR)resources/public/sfx

ITFILES	:= $(wildcard $(MUSIC_SRC_DIR)/*.it)
MUSIC_OGGFILES := $(ITFILES:.it=.ogg)
# MUSIC_DESTFILES := $(MUSIC_OGGFILES:$(MUSIC_SRC_DIR):$(MUSIC_OUT_DIR))
MUSIC_DESTFILES = $(MUSIC_OUT_DIR)/bu-ogre-of-a-simplex.ogg

SFX_WAVS := $(wildcard $(SFX_DIR)/*.wav)
SFX_OGGFILES := $(SFX_WAVS:.wav=.ogg)

# $(info $(ITFILES))
# $(info $(MUSIC_OGGFILES))
# $(info $(MUSIC_DESTFILES))

sound: $(MUSIC_DESTFILES) $(SFX_OGGFILES)

$(MUSIC_OGGFILES): $(ITFILES)

clean-music:
	@rm -f output.wav
	@rm -f $(MUSIC_SRC_DIR)/*.ogg
	@rm -f $(MUSIC_OUT_DIR)/*.ogg

clean-sfx:
	@rm -f $(SFX_DIR)/*.ogg

clean: clean-music clean-sfx

$(MUSIC_SRC_DIR)/%.ogg: $(MUSIC_SRC_DIR)/%.it
	modplug123 $< -ao wav

$(MUSIC_OUT_DIR)/%.ogg: $(MUSIC_SRC_DIR)/%.ogg
	oggenc -o $@ output.wav
	rm output.wav

%.ogg: %.wav
	oggenc -o $@ $<
