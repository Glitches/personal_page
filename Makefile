.PHONY: all say_hello generate

all: say_hello generate

say_hello:
        @echo "Hello World"

generate:
        @echo "Creating empty text files..."
        touch file-{1..10}.txt

# clean:
#         @echo "Cleaning up..."
#         rm *.txt
# .PHONY: update install

# update:
# 	apk update

# install:
# 	apk add zsh curl git
