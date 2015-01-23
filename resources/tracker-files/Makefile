ITFILES	:= $(wildcard *.it)
OGGFILES := $(ITFILES:.it=.ogg)

MUSICDIR := ../public/music/

all: $(OGGFILES)

install: $(OGGFILES)
	@mkdir -p $(MUSICDIR)
	@cp -av *.ogg $(MUSICDIR)

clean:
	@rm -f output.wav
	@rm -f *.ogg
	@rm -f *.bak

$(OGGFILES): $(ITFILES)
	modplug123 $< -ao wav
	oggenc -o $@ output.wav
	rm output.wav
