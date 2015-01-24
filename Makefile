MKFILE_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
MYDIR := $(dir $(MKFILE_PATH))

MUSIC_SRC_DIR := $(MYDIR)resources/tracker-files
MUSIC_OUT_DIR := $(MYDIR)resources/public/music

ITFILES	:= $(wildcard $(MUSIC_SRC_DIR)/*.it)
OGGFILES := $(ITFILES:.it=.ogg)

music: $(OGGFILES)
	@mkdir -p $(MUSIC_OUT_DIR)
	@cp -av $(OGGFILES) $(MUSIC_OUT_DIR)

clean-music:
	@rm -f output.wav
	@rm -f $(MUSIC_SRC_DIR)/*.ogg
	@rm -f $(MUSIC_OUT_DIR)/*.ogg

clean: clean-music

$(OGGFILES): $(ITFILES)
	modplug123 $< -ao wav
	oggenc -o $@ output.wav
	rm output.wav
