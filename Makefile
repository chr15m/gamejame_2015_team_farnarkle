MKFILE_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
MYDIR := $(dir $(MKFILE_PATH))

MUSIC_SRC_DIR := $(MYDIR)resources/tracker-files
MUSIC_OUT_DIR := $(MYDIR)resources/public/music
SFX_DIR := $(MYDIR)resources/public/sfx

ITFILES	:= $(wildcard $(MUSIC_SRC_DIR)/*.it)
MUSIC_OGGFILES := $(ITFILES:.it=.ogg)
MUSIC_DESTFILES := $(MUSIC_OGGILES:$(MUSIC_SRC_DIR):$(MUSIC_OUT_DIR))

SFX_WAVS := $(wildcard $(SFX_DIR)/*.wav)
SFX_OGGFILES := $(SFX_WAVS:.wav=.ogg)

sound: music $(SFX_OGGFILES)

music: $(MUSIC_OGGFILES)
	@mkdir -p $(MUSIC_OUT_DIR)

$(MUSIC_DESTFILES): $(MUSIC_OGGFILES)
	@cp -av $< $@

clean-music:
	@rm -f output.wav
	@rm -f $(MUSIC_SRC_DIR)/*.ogg
	@rm -f $(MUSIC_OUT_DIR)/*.ogg

clean-sfx:
	@rm -f $(SFX_DIR)/*.ogg

clean: clean-music clean-sfx

$(MUSIC_OGGFILES): $(ITFILES)
	modplug123 $< -ao wav
	oggenc -o $@ output.wav
	rm output.wav

%.ogg: %.wav
	oggenc -o $@ $<
