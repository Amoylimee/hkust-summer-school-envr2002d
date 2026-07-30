SHELL := /bin/sh

TEX := main.tex
PDF := main.pdf
XELATEX ?= xelatex
XELATEX_FLAGS := -synctex=1 -interaction=nonstopmode -halt-on-error -file-line-error
LINE ?= 1

.PHONY: all clean distclean open link

all: $(PDF)

$(PDF): $(TEX)
	$(XELATEX) $(XELATEX_FLAGS) $(TEX)
	$(XELATEX) $(XELATEX_FLAGS) $(TEX)
	@printf '\nBuilt PDF: %s\n' "$(CURDIR)/$(PDF)"
	@printf 'Clickable source: %s:1\n' "$(CURDIR)/$(TEX)"

clean:
	$(RM) main.aux main.log main.nav main.out main.snm main.toc main.vrb
	$(RM) main.fls main.fdb_latexmk

distclean: clean
	$(RM) $(PDF) main.synctex.gz

open: $(PDF)
	open $(PDF)

link:
	@printf '%s:%s\n' "$(CURDIR)/$(TEX)" "$(LINE)"
