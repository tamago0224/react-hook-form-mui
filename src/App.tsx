import { Button, Checkbox, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  checkboxValue: boolean;
  radioGroupValue: string;
  radioGroupFlag: boolean;
  selectValue: string;
  textFieldValue: string;
  textFieldNumber: number;
}

function App() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      checkboxValue: false,
      radioGroupValue: "female",
      radioGroupFlag: false,
      selectValue: "",
      textFieldValue: "",
      textFieldNumber: 0,
    }
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Typography variant="h3">React Hook FormとMUIの連携サンプル</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack width={500} margin={2} spacing={1}>
          <Controller
            name="checkboxValue"
            control={control}
            render={({ field }) => (<FormControlLabel {...field} control={<Checkbox />} label="ラベルサンプル" />)}
          />
          <Controller
            name="radioGroupValue"
            control={control}
            render={({ field }) => (
              <FormControl>
                <RadioGroup {...field}>
                  <FormControlLabel value="female" control={<Radio />} label="女性" />
                  <FormControlLabel value="male" control={<Radio />} label="男性" />
                  <FormControlLabel value="other" control={<Radio />} label="その他" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <Controller
            name="radioGroupFlag"
            control={control}
            render={({ field }) => (
              <FormControl>
                <RadioGroup {...field} onChange={(event) => field.onChange(event?.currentTarget.value === "true")}>
                  <FormControlLabel value={true} control={<Radio />} label="有効" />
                  <FormControlLabel value={false} control={<Radio />} label="無効" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <Controller
            name="selectValue"
            control={control}
            render={({ field }) => (
              <Select {...field} displayEmpty>
                <MenuItem value=""><em>なし</em></MenuItem>
                <MenuItem value="female">女性</MenuItem>
                <MenuItem value="male">男性</MenuItem>
                <MenuItem value="other">その他</MenuItem>
              </Select>
            )}
          />
          <Controller
            name="textFieldValue"
            control={control}
            render={({ field }) => <TextField {...field} />}
          />
          <Controller
            name="textFieldNumber"
            control={control}
            render={({ field }) => <TextField type="number" {...field} onChange={(event) => field.onChange(parseInt(event.currentTarget.value))} />}
          />

        </Stack >
        <Button type="submit" variant="contained">保存</Button>
      </form>
    </>
  )
}

export default App
