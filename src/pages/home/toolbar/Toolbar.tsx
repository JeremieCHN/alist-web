import {
  Box,
  createDisclosure,
  useColorModeValue,
  VStack,
} from "@hope-ui/solid";
import { createMemo, Show } from "solid-js";
import { SwitchColorMode } from "./SwitchColorMode";
import { Portal } from "solid-js/web";
import { ToolIcon } from "./Icon";
import { CgMoreO } from "solid-icons/cg";
import { Motion } from "@motionone/solid";
import { SwitchLnaguage } from "~/components";
import { TbLanguageHiragana } from "solid-icons/tb";
import { TbCheckbox } from "solid-icons/tb";
import { toggleCheckbox } from "~/store";

const Toolbar = () => {
  const { isOpen, onToggle } = createDisclosure();
  const margin = createMemo(() => (isOpen() ? "$4" : "$5"));
  return (
    <Portal>
      <Box
        class="toolbar-box"
        pos="fixed"
        right={margin()}
        bottom={margin()}
        // bottom="50%"
        // transform="translateY(50%)"
      >
        <Show
          when={isOpen()}
          fallback={
            <ToolIcon class="toolbar-toggle" as={CgMoreO} onClick={onToggle} />
          }
        >
          <VStack
            class="toolbar"
            p="$1"
            rounded="$lg"
            bgColor={useColorModeValue("white", "$neutral4")()}
            spacing="$1"
          >
            <Motion
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <VStack spacing="$1">
                <ToolIcon as={TbCheckbox} onClick={toggleCheckbox} />
                <SwitchLnaguage as="span">
                  <ToolIcon as={TbLanguageHiragana} />
                </SwitchLnaguage>
                <SwitchColorMode />
              </VStack>
            </Motion>
            <ToolIcon as={CgMoreO} onClick={onToggle} />
          </VStack>
        </Show>
      </Box>
    </Portal>
  );
};

export { Toolbar };
